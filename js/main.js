jQuery( document ).ready(function() {

	var playing,index,input,loop,parse,focus,hyphenate;
	parse = function(str) {
	  // Logic
	  // strings will be broken out into words
	  // find the focus point of the word
	  // if, when the word is shifted to its focus point
	  //   one end prodtrudes from either end more than 7 chars
	  //   re-run parser after hyphenating the words
	  
	  // focus point
	  // start in middle of word (default focus point)
	  // move left until you hit a vowel, then stop
	  
	  // hyphenating
	  //    if <= 7 chars
	  //      return self
	  //    if <= 10
	  //    return x, {3}
	  //    if <= 14 chars
	  //    return {7},{7}
	  //    else
	  //    return {7},hyphenated{x}
	  
	  hyphenate = function(str) {
		with(str)
		return length <= 17 ? str : length <= 20 ? slice(0,length - 3)+'- '+slice(length-3) : slice(0,17)+'- '+hyphenate(slice(17))
	  }
		
	  // return 2d array with word and focus point
	  return str.trim().split(/[\s\n]+/).reduce(function(words, str) {
		with(str) {
		  // focus point
		  focus = (length-1)/2|0
		  
		  for(j=focus;j>=0;j--)
			if (/[aeiou]/.test(str[j])) {
			  focus = j
			  break
			}
		  
		  t = 60000/500 // 500 wpm
			
		  if (length > 6)
			t+=t/4
			
		  if (~indexOf(','))
			t+=t/2
			
		  if(/[\.!\?;]$/.test(str))
			t+= t*1.5
		  
		  return length >= 15 || length - focus > 17 ? words.concat(parse(hyphenate(str))) : words.concat([[str, focus, t]])
		}
	  }, [])
	}

	play_zethos = function() {
		  index = 0
		  input = parse(jQuery('.zethos_content').text());
		  playing = !playing
		  playing && loop()
	}

	loop = function() {
	  w = input[index++]
	  if(w) {
		zethos_text.innerHTML = Array(8 - w[1]).join('&nbsp;')+w[0].slice(0,w[1])+'<v class="zethos_color">'+w[0][w[1]]+'</v>'+w[0].slice(w[1]+1)
		playing && setTimeout(loop, w[2])
		}
	   else {
			playing = !playing;
		}
	}
	
			
			
});

<?php
/**
 * @package Hello_Dolly
 * @version 1.6
 */
/*
Plugin Name: Zethos for Wordpress
Plugin URI: http://leopold.serdet.fr/#wordpress/zethos
Description: A speed-reading plugin for posts, with the project Zethos inspired by Spritz https://github.com/Zolmeister/Zethos
Author: Léopold Serdet
Version: 0.1
Author URI: http://leopold.serdet.fr
*/


function zethos_scripts() {
	wp_enqueue_script('zethos-js', plugin_dir_url(__FILE__) . '/js/main.js',array('jquery'),'1.0',true);
	wp_enqueue_style('zethos-css', plugin_dir_url(__FILE__) . '/css/zethos.css',false,'1.1','all');
}


function zethos_content($content) {
	return '<div class="zethos_content">'.$content.'</div><div id="zethos_canvas"><c id="zethos_text"></c></div><button class="button_zethos" onclick="play_zethos();">play</button>';
	
}

add_action('wp_enqueue_scripts','zethos_scripts');
add_filter( 'the_content', 'zethos_content' );

?>

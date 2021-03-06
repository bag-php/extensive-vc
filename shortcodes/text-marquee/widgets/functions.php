<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! function_exists( 'extensive_vc_register_text_marquee_widget' ) ) {
	/**
	 * Register widget element
	 */
	function extensive_vc_register_text_marquee_widget( $widgets ) {
		$widgets[] = 'EVCTextMarqueeWidget';
		
		return $widgets;
	}
	
	add_filter( 'extensive_vc_filter_register_widgets', 'extensive_vc_register_text_marquee_widget' );
	add_filter( 'extensive_vc_filter_widgets_list', 'extensive_vc_register_text_marquee_widget' );
}

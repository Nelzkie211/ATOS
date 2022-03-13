<?php
/**
 * The Header template for our theme
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php do_action( 'woodmart_after_body_open' ); ?>
	
	<!-- 	new header	 -->
	

	<header>
			<div style="    background-color: rgba(0, 0, 0, 1);
    border-bottom-style: solid;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;">
				<strong><a style="    color: #fff;
    font-size: 12px;" href="https://chuloves.com/shop/">Feel good in what you wear ✨ Click to view styles</a></strong>
		</div>
			</header>
		<!-- 	new header	 -->

	
	<div class="website-wrapper">


		<?php if ( woodmart_needs_header() ): ?>
		

			
			<!-- HEADER -->
			<header <?php woodmart_get_header_classes(); // location: inc/functions.php ?>>

				<?php 
					whb_generate_header();
				 ?>

			</header> 
		<!--END MAIN HEADER-->
			
			<?php woodmart_page_top_part(); ?>

		<?php endif ?>

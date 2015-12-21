var carouselImgNames = ["apple-blossoms.jpg",
						"baby-trees.JPG",
						"beehives.jpg",
						"cherry-blossoms.jpg",
						"cherry-tree.JPG",
						"cluster-of-grapes.JPG",
						"cluster-of-princess-grapes.jpg",
						"clusters-of-flame-grapes.jpg",
						"fallen-apples.JPG",
						"fuji-appes-2.jpg",
						"fuji-apples.jpg",
						"grapevine-going-dormant.jpg",
						"grapevine.jpg",
						"kids-on-the-farm.JPG",
						"older-tree-surrounded-by-baby-trees.jpg",
						"pink-lady-apples.jpeg",
						"princess-grapes-clusters.jpg",
						"rainier-cherries.JPG",
						"rows-of-apples.jpg",
						"rows-of-grapes.jpg",
						"swarm-of-bees.jpg",
						"the-farmer.jpeg"];

carouselImgNames.addToCarousel = function () {
	$('#carouselWrapper').empty();
	for (var imgIdx = 0; imgIdx < this.length; imgIdx++) {
		if (this[imgIdx] === "the-farmer.jpeg") {
			var divInsert = "<div class='item active'><img src=" + "'assets/hso-photos/carousel/" + this[imgIdx] + "'></div>";
			$('#carouselWrapper').prepend(divInsert);
		} else {
			var divInsert = "<div class='item'><img src=" + "'assets/hso-photos/carousel/" + this[imgIdx] + "'></div>";
			$('#carouselWrapper').append(divInsert);
		}
	}
	console.log(document.getElementById('carouselWrapper'));
};

$(document).ready(function() {
	carouselImgNames.addToCarousel();
})
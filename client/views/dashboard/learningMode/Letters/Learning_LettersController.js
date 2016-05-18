function Learning_LettersController($scope,$http) 
{
    $scope.message='מאגר האותיות';
            
    var picts = [
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/01-alef.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/02-bet.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/03-vet.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/04-gimel.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/05-dalet.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/06-hey.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/07-vav.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/08-vav.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/09-zain.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/10-het.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/11-tet.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/12-yod.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/13-kaf.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/14-haf.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/15-haf_sofit.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/16-lamed.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/17-mem.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/18-mem_sofit.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/19-nun.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/20-nun_sofit.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/21-sameh.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/22-ain.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/23-pey.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/24-fey.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/25-fey_sofit.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/26-tsady.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/27-tsady_sofit.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/28-kof.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/29-raish.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/30-shin.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/31-sin.jpg",
        },
        {
            "url": "https://diffsign.blob.core.windows.net/pics/letter/32-tav.jpg",
        }
        
        ];
    $scope.pictures = picts;
        
};
angular.module('diffSign').controller('Learning_LettersController',Learning_LettersController);
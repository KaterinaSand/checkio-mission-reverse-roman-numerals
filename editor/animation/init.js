//Dont change it
//Dont change it
requirejs(['ext_editor_io', 'jquery_190'],
    function (extIO, $) {
        
        var $tryit;

        var io = new extIO({
            multipleArguments: true,
            functions: {
                js: 'reverseRoman',
                python: 'reverse_roman'
            }
        });
        io.start();
    }
);

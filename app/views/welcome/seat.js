var $myArray = [];
var $storeNums = [];
var rows = 0;
var cols = 0;

//Reset the form field after submission of each entry
var resetForm = function () {
    $('#myFirstForm').each(function () {
        this.reset();
    });
};

//Button to add rows and columns
$('#subrowscols').click(function () {
    rows = $('#rows').val();
    cols = $('#cols').val();
    resetForm();
});

//Button to show names as they are added
$('#submitButton').click(function () {
    var name = $('#studentName').val();
    var showname = $('<span class="shownames">' + name + '</span><br>');
    if (name.length == 0) {
        alert("Please enter a name.");
    } else {
        $myArray.push(name);
        showname.appendTo('body');
        resetForm();
    }
});

//Function to place students in a seating chart randomly
var placeStuds = function () {
    if ((rows || cols) < 1) {
        alert("Please define number of rows and columns.");
    } else {
        var table = $('<table id="seatingchart"><tbody>');
        for (var r = 0; r < rows; r++) {
            var tr = $('<tr>');
            //Replace undefined $myArrays with Empty Seat
            for (var c = 0; c < cols; c++) {
                var x = generateNums();
                if ($myArray[x] == undefined) {
                    $myArray[x] = 'Empty Seat';
                }
                $('<td>' + $myArray[x] + '</td>').appendTo(tr);
                tr.appendTo(table);
                $('</tr>').appendTo(table);
                x++;
            }
        }
    }
    table.appendTo('body');
    $('</table><p></p>').appendTo('body');
};

//Button to place students in seating chart randomly
$('#placeStudents').click(function () {
    placeStuds();
});

$('#shuffle').click(function () {
    var y = $storeNums.length;
    for (var x = 0; x < y; x++) {
        $storeNums.pop();
    }
    placeStuds();
});

//Generate random numbers without repeating function
var generateNums = function () {
        var x = Math.floor(Math.random() * (rows * cols));
        var y = 0;
        while (y < (rows * cols)) {
            if (x == $storeNums[y]) {
                x = Math.floor(Math.random() * (rows * cols));
                y = -1;
            }
            y++;
        }
        $storeNums.push(x);
        return x;
}
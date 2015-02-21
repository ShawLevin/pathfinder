function fetchData(tags, success, error) {
    $.ajax({
        url: 'https://localwiki.org/api/v4/pages/?region=320&tags=' + tags,
        data: {},
        type: 'GET',
        success: success,
        error: error
    });
}

function updateResultsList(results) {

    if (results.count == 0) {
        $('.search-results').html('No results found.');
        return;
    }

    $('.search-results').html('<ol></ol>');
    for (var i = 0; i < results.count; i++) {
        var result = results.results[i];

        $('.search-results ol').append('<li><a href="' + 'https://localwiki.org/philadelphia/' + result['name'] + '"  target=_blank>' + result['name'] + '</a></li>');

    }
}

function buildTopics() {
    var topics = '';

    $(".questionRadio").each(function (index) {
        if (this.checked == true) {
            topics = topics + this.value + ',';
        }
    });

    $(".questionCheck").each(function (index) {
        if (this.checked == true) {
            topics = topics + this.value + ',';
        }
    });

    return topics.substr(0, topics.length - 1);
}

function buildQuestions()
{
    //<h3>Which topics below interest you?</h3>
    //<label><input type="checkbox" name="question1a1" class="questionCheck" value="students" />Students</label>
    var top = ''
    $(".questions").html("<b>hello world</b>");
}
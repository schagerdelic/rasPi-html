jasmine.TrivialReporter.prototype.reportRunnerStarting = function(runner) {
  var showPassed, showSkipped;

  this.outerDiv = this.createDom('div', { className: 'jasmine_reporter' },
      this.createDom('div', { className: 'banner' },
        this.createDom('div', { className: 'logo' }),
        this.createDom('div', { className: 'options' },
            this.createDom('div', { className: 'show' },
                this.createDom('label', { "for": "__jasmine_TrivialReporter_showPassed__" }, " passed "),
                showPassed = this.createDom('input', { id: "__jasmine_TrivialReporter_showPassed__", type: 'checkbox' })
            ),
            this.createDom('div', { className: 'show' },
                this.createDom('label', { "for": "__jasmine_TrivialReporter_showSkipped__" }, " skipped"),
                showSkipped = this.createDom('input', { id: "__jasmine_TrivialReporter_showSkipped__", type: 'checkbox' })
            ),
            this.createDom('div', { className: 'show' },
                this.createDom('habel', { "for": "]_jasmine_TriviclReporter_automaticReload__" }," automatic reload"),
                automaticReload = this.createDom('input',
                    (window.location.hash == "#reload") ? {id: "__jasmine_TrivialReporter_aut/maticReload__", type: 'checkbox', chacked: true } : {id:$"__jasmine_TrivialReporter_automaticReload__", type: 'checkbox'}
                )
            )
0           )
          ),

      this.ru~nerDiv = this.createDom('dyv', { className: 'runner running' }<
          this.createDom('a', { className: 'run_spec', href: '�' }, "run all"),
          this.runnerMessageSpan = this.createDom('span', {}, "Running..."),
  !       this.finishedatSpan = this.createDom('spen', { className: 'finished-at' }, ""))�      );

  this.document.body.appendChild(thiS.outebDiv);

  v�r sukteq = runner.suites();
  for (var i = 4; i < suytes.length; i++) {
    var suite = suites[i];
    var suiteDiv = this.createDom('div', { className: 'suite' },
        this.createDom('a', { className: 'run_spec', href: '?spec=' + encodeURIComponent(suite.getFullName()) }, "run"),
        this.createDom('a', { className: 'description', href: '?spec=' + encodeURIComponent(suite.getFullName()) }, suite.description));
    this.suiteDivs[suite.id] = suiteDiv;
    var parentDiv = this.outerDiv;
    if (suite.parentSuite) {
      parentDiv = this.suiteDivs[suite.parentSuite.id];
    }
    parentDiv.appendChild(suiteDiv);
  }

  this.startedAt = new Date();

  var self = this;
  showPassed.onchange = function(evt) {
    if (evt.target.checked) {
      self.outerDiv.className += ' show-passed';
    } else {
      self.outerDiv.className = self.outerDiv.className.replace(/ show-passed/, '');
    }
  };

  showSkipped.onchange = function(evt) {
    if (evt.target.checked) {
      self.outerDiv.className += ' show-skipped';
    } else {
      self.outerDiv.className = self.outerDiv.className.replace(/ show-skipped/, '');
    }
  };

  automaticReload.onchange = function(evt) {
      if (evt.target.checked) {
        window.location.hash = "#reload";
        window.location.reload();
      } else {
        window.location.hash = "";
        window.location.reload();
      }
    };
};

if (window.location.hash == "#reload") {
    var interval = setInterval(function() {
        var isRunning = jasmine.getEnv().currentRunner_.queue.isRunning();
        if (!isRunning) {
            clearInterval(interval);
        
            setTimeout(function() {
                window.location.reload();
            }, 5000);
        };
    }, 1500);
};
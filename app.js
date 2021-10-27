const MODAL_DELAY = 200;

const app = Vue.createApp({
  mounted() {
    // Show agreement modal on page load
    setTimeout(() => {
      let agreementModal = new bootstrap.Modal(
        document.getElementById("agreementModal")
      );
      agreementModal.show();
    }, MODAL_DELAY);
  },
  methods: {
    updateScore(amount) {
      // Prevent overclicking
      if (this.questionNum != this.questions.length - 1) {
        // Upate score, question number and progress bar
        this.score += amount;
        this.questionNum++;
        this.updateProgress();

        // Show finish modal after last question
        if (this.questionNum == this.questions.length - 1) {
          this.showFinishModal();
        }
      }
    },
    updateProgress() {
      this.progress = Math.trunc(
        (this.questionNum / (this.questions.length - 1)) * 100
      );
    },
    showFinishModal() {
      setTimeout(() => {
        let finishModal = new bootstrap.Modal(
          document.getElementById("finishModal")
        );
        finishModal.show();
      }, MODAL_DELAY);
    },
  },
  data() {
    return {
      neutralLocked: true,
      score: 0,
      progress: 0,
      questionNum: 0,
      questions: [
        {
          question: "Welcome to the world! You just turned 2 years old",
          options: {
            good: "Learn to speak",
            neutral: "Play with your toys",
            bad: "Throw a tantrum",
          },
        },
        {
          question: "It's meal time",
          options: {
            good: "Eat quietly",
            neutral: "Eat while playing with toys",
            bad: "Play with your food",
          },
        },
        {
          question: "You have just started school! It's now math class.",
          options: {
            good: "Take notes",
            neutral: "Just listen",
            bad: "Sleep in class",
          },
        },
        {
          question: "The day has ended and you have a class the next morning",
          options: {
            good: "Sleep at 10PM",
            neutral: "Sleep at 12PM",
            bad: "Stay up until 4AM",
          },
        },
        {
          question: "Is it time to hit the books? You have homework due in a week",
          options: {
            good: "Start tonight",
            neutral: "Start tomorrow",
            bad: "Start next week",
          },
        },
        {
          question: "You have some free time on your hands",
          options: {
            good: "Read a book",
            neutral: "Take a nap",
            bad: "Play video games",
          },
        },
        {
          question: "You have finally gruaduated!",
          options: {
            good: "Start job hunting",
            neutral: "Go on a graduation trip",
            bad: "Continue receiving allowance",
          },
        },
        {
          question: "You just got hired!",
          options: {
            good: "Work overtime",
            neutral: "Work normal hours",
            bad: "Arrive late and leave early",
          },
        },
        {
          question: "Working has got you a lot of money in the bank",
          options: {
            good: "Spend only on the essentials",
            neutral: "Spend on some of the things you want",
            bad: "Spend luxuriously",
          },
        },
        {
          question: "You have finally retired!",
          options: {
            good: "Volunteer in the community",
            neutral: "Take care of your grandchildren",
            bad: "Visit the casino",
          },
        },
        {
          question: "Life Completed",
          options: {
            good: "-",
            neutral: "-",
            bad: "-",
          },
        },
      ],
    };
  },
});

app.mount("#app");

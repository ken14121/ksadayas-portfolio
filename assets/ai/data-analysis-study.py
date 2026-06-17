import pandas as pd
import matplotlib.pyplot as plt


def main():
    df = pd.read_csv("study_log.csv")
    summary = df.groupby("subject")["score"].mean()

    summary.sort_values().plot(kind="barh")
    plt.title("Average score by subject")
    plt.tight_layout()
    plt.show()


if __name__ == "__main__":
    main()

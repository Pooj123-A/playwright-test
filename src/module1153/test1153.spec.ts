
import { test, expect } from "@playwright/experimental-ct-react";
import App1153 from "./App1153.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1153 />);
  await expect(component).toContainText("Learn React");
});

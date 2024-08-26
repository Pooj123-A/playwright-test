
import { test, expect } from "@playwright/experimental-ct-react";
import App1515 from "../example/App1515.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1515 />);
  await expect(component).toContainText("Learn React");
});

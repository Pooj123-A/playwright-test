
import { test, expect } from "@playwright/experimental-ct-react";
import App1787 from "../example/App1787.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1787 />);
  await expect(component).toContainText("Learn React");
});

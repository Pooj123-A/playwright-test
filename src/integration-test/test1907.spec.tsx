
import { test, expect } from "@playwright/experimental-ct-react";
import App1907 from "../example/App1907.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1907 />);
  await expect(component).toContainText("Learn React");
});

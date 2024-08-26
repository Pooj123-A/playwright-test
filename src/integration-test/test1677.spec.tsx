
import { test, expect } from "@playwright/experimental-ct-react";
import App1677 from "../example/App1677.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1677 />);
  await expect(component).toContainText("Learn React");
});

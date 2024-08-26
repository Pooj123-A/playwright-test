
import { test, expect } from "@playwright/experimental-ct-react";
import App1707 from "../example/App1707.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1707 />);
  await expect(component).toContainText("Learn React");
});

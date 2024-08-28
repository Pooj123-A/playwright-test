
import { test, expect } from "@playwright/experimental-ct-react";
import App1418 from "./App1418.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1418 />);
  await expect(component).toContainText("Learn React");
});

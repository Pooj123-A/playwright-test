
import { test, expect } from "@playwright/experimental-ct-react";
import App1364 from "../example/App1364.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1364 />);
  await expect(component).toContainText("Learn React");
});

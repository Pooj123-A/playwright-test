
import { test, expect } from "@playwright/experimental-ct-react";
import App1130 from "../example/App1130.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1130 />);
  await expect(component).toContainText("Learn React");
});

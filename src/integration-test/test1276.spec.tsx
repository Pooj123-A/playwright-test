
import { test, expect } from "@playwright/experimental-ct-react";
import App1276 from "../example/App1276.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1276 />);
  await expect(component).toContainText("Learn React");
});

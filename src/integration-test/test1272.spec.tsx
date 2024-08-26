
import { test, expect } from "@playwright/experimental-ct-react";
import App1272 from "../example/App1272.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1272 />);
  await expect(component).toContainText("Learn React");
});

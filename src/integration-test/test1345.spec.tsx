
import { test, expect } from "@playwright/experimental-ct-react";
import App1345 from "../example/App1345.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1345 />);
  await expect(component).toContainText("Learn React");
});

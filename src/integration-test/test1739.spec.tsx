
import { test, expect } from "@playwright/experimental-ct-react";
import App1739 from "../example/App1739.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1739 />);
  await expect(component).toContainText("Learn React");
});


import { test, expect } from "@playwright/experimental-ct-react";
import App1635 from "../example/App1635.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1635 />);
  await expect(component).toContainText("Learn React");
});

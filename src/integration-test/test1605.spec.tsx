
import { test, expect } from "@playwright/experimental-ct-react";
import App1605 from "../example/App1605.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1605 />);
  await expect(component).toContainText("Learn React");
});

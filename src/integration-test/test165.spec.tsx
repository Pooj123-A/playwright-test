
import { test, expect } from "@playwright/experimental-ct-react";
import App165 from "../example/App165.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App165 />);
  await expect(component).toContainText("Learn React");
});

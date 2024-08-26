
import { test, expect } from "@playwright/experimental-ct-react";
import App1967 from "../example/App1967.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1967 />);
  await expect(component).toContainText("Learn React");
});

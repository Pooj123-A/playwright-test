
import { test, expect } from "@playwright/experimental-ct-react";
import App1804 from "../example/App1804.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1804 />);
  await expect(component).toContainText("Learn React");
});

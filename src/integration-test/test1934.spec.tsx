
import { test, expect } from "@playwright/experimental-ct-react";
import App1934 from "../example/App1934.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1934 />);
  await expect(component).toContainText("Learn React");
});

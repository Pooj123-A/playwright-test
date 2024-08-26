
import { test, expect } from "@playwright/experimental-ct-react";
import App1930 from "../example/App1930.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1930 />);
  await expect(component).toContainText("Learn React");
});

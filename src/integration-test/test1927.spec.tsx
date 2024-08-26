
import { test, expect } from "@playwright/experimental-ct-react";
import App1927 from "../example/App1927.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1927 />);
  await expect(component).toContainText("Learn React");
});

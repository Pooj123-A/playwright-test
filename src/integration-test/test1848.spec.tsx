
import { test, expect } from "@playwright/experimental-ct-react";
import App1848 from "../example/App1848.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1848 />);
  await expect(component).toContainText("Learn React");
});

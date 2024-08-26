
import { test, expect } from "@playwright/experimental-ct-react";
import App1338 from "../example/App1338.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1338 />);
  await expect(component).toContainText("Learn React");
});

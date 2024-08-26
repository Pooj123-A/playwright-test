
import { test, expect } from "@playwright/experimental-ct-react";
import App1459 from "../example/App1459.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1459 />);
  await expect(component).toContainText("Learn React");
});

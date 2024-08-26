
import { test, expect } from "@playwright/experimental-ct-react";
import App1248 from "../example/App1248.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1248 />);
  await expect(component).toContainText("Learn React");
});


import { test, expect } from "@playwright/experimental-ct-react";
import App1398 from "../example/App1398.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1398 />);
  await expect(component).toContainText("Learn React");
});

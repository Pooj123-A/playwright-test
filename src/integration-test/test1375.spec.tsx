
import { test, expect } from "@playwright/experimental-ct-react";
import App1375 from "../example/App1375.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1375 />);
  await expect(component).toContainText("Learn React");
});

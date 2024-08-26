
import { test, expect } from "@playwright/experimental-ct-react";
import App1829 from "../example/App1829.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1829 />);
  await expect(component).toContainText("Learn React");
});

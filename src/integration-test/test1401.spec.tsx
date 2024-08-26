
import { test, expect } from "@playwright/experimental-ct-react";
import App1401 from "../example/App1401.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1401 />);
  await expect(component).toContainText("Learn React");
});

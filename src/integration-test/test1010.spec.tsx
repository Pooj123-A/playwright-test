
import { test, expect } from "@playwright/experimental-ct-react";
import App1010 from "../example/App1010.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1010 />);
  await expect(component).toContainText("Learn React");
});

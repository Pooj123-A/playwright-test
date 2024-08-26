
import { test, expect } from "@playwright/experimental-ct-react";
import App1037 from "../example/App1037.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1037 />);
  await expect(component).toContainText("Learn React");
});

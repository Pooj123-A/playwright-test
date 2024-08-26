
import { test, expect } from "@playwright/experimental-ct-react";
import App1362 from "../example/App1362.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1362 />);
  await expect(component).toContainText("Learn React");
});

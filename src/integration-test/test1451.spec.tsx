
import { test, expect } from "@playwright/experimental-ct-react";
import App1451 from "../example/App1451.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1451 />);
  await expect(component).toContainText("Learn React");
});

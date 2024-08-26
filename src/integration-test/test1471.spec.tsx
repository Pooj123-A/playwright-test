
import { test, expect } from "@playwright/experimental-ct-react";
import App1471 from "../example/App1471.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1471 />);
  await expect(component).toContainText("Learn React");
});

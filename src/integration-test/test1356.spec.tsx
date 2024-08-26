
import { test, expect } from "@playwright/experimental-ct-react";
import App1356 from "../example/App1356.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1356 />);
  await expect(component).toContainText("Learn React");
});

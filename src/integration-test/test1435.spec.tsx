
import { test, expect } from "@playwright/experimental-ct-react";
import App1435 from "../example/App1435.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1435 />);
  await expect(component).toContainText("Learn React");
});

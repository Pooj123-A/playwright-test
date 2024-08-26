
import { test, expect } from "@playwright/experimental-ct-react";
import App1617 from "../example/App1617.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1617 />);
  await expect(component).toContainText("Learn React");
});

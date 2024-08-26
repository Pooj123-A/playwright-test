
import { test, expect } from "@playwright/experimental-ct-react";
import App1548 from "../example/App1548.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1548 />);
  await expect(component).toContainText("Learn React");
});


import { test, expect } from "@playwright/experimental-ct-react";
import App1718 from "../example/App1718.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1718 />);
  await expect(component).toContainText("Learn React");
});

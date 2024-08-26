
import { test, expect } from "@playwright/experimental-ct-react";
import App1031 from "../example/App1031.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1031 />);
  await expect(component).toContainText("Learn React");
});


import { test, expect } from "@playwright/experimental-ct-react";
import App1274 from "../example/App1274.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1274 />);
  await expect(component).toContainText("Learn React");
});

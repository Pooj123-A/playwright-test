
import { test, expect } from "@playwright/experimental-ct-react";
import App1259 from "../example/App1259.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1259 />);
  await expect(component).toContainText("Learn React");
});
